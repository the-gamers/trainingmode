
firebase.database().ref('/admin/logs/').once('value').then(function(data)
    {
             let visit = data.val().visit;
             let down = data.val().download;

             $('#visit').text(visit);
             $('#down').text(down);
        
    });    