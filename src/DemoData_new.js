let DemoData = {};
let data_string = {}
let axios = require('axios');
var parse = require('xml2js');


let getCpad = async ()=> {
    let data_string_xml = await axios({
        method: 'get',
        url: 'http://v-cpad-p01.tvo.org:8080/CPAD/videos/',
        responseType: 'text'
    })
    let data_string_xml_data = data_string_xml.data;
    var data_string_cleaned = data_string_xml_data.replace("\ufeff", "");
    parse.parseString(data_string_cleaned, (err, result)=>{data_string = result})
    //console.log(data_string);
    createJSON(data_string);
}



async function createJSON(data_string){ 
    let resources = [];
    let events = [];
    let eventsForTaskView = [];
    let eventsForCustomEventStyle = [];

let video_array = data_string['videos']['video'];
//let video_array_length = Object.keys(video_array).length;
let idNum = 0;
//let finalDemoData = {};
//console.log(typeof video_array);
DemoData = {resources : [], events: [], eventsForTaskView: [], eventsForCustomEventStyle: []};
video_array.forEach(function (record) {
    
    
    let resources = DemoData.resources;
    resources.push({id: record.video_asset_id[0], name: `${record.video_asset_id[0]} - ${record.title}`, groupOnly: false});
    let events = DemoData.events;
    let publishDate = record.born_date[0];
    let killDate = record.kill_date[0];
    let publishDateFormated = `${publishDate.slice(0,10)} ${publishDate.slice(11,19)}`;
    let killDateFormated = `${killDate.slice(0,10)} ${killDate.slice(11,19)}`; 

    console.log((record.group[0]));

    if(record.group[0] == 'Adult'){
        events.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'Brightcove', bgColor: '#f759ab'  });
    let eventsForTaskView = DemoData.eventsForTaskView;
    eventsForTaskView.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'Brightcove', groupId: 1, groupName: 'Task1', bgColor: '#f759ab' });
    let eventsForCustomEventStyle = DemoData.eventsForCustomEventStyle;
    eventsForCustomEventStyle.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'Brightcove', type: 1, bgColor: '#f759ab' });
    }else{
    events.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'YouTube', bgColor: '#339AF0'  });
    let eventsForTaskView = DemoData.eventsForTaskView;
    eventsForTaskView.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'YouTube', groupId: 1, groupName: 'Task1', bgColor: '#339AF0' });
    let eventsForCustomEventStyle = DemoData.eventsForCustomEventStyle;
    eventsForCustomEventStyle.push({id: idNum + 1,  start: publishDateFormated, end: killDateFormated, resourceId: record.video_asset_id[0], title: 'YouTube', type: 1, bgColor: '#339AF0' });
    }

    console.log(idNum);

    if (idNum == 19){
        events.push({
            id: 21,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '125969X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        },
        {
            id: 22,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '122009X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        })
        eventsForTaskView.push({
            id: 21,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '125969X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        },
        {
            id: 22,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '122009X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        })

        eventsForCustomEventStyle.push({
            id: 21,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '125969X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        },
        {
            id: 22,
            start: '2019-03-22 09:00:00',
            end: '2025-02-01 10:56:35',
            resourceId: '122009X',
            title: 'Brightcove',
            bgColor: '#f759ab',
        })

    }

    idNum = idNum + 1;
})

return DemoData;
}



export default getCpad()
