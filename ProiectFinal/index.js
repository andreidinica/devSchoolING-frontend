

var rootRef=firebase.database().ref().child("Events");

rootRef.on("child_added",snap => {
    var name= snap.child("Name").val();
    var date=snap.child("Date_time").val();
    var category=snap.child("Category").val();

    $("#table_body").append("<tr><td>"+ name +"</td><td>"+date+"</td><td>"+ category +"</td><td><button>Remove"+"</button></td></tr>");
});
