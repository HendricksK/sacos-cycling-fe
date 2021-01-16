var show_more_btns =  document.getElementsByClassName('show-more')
console.log(show_more_btns)
if (typeof(show_more_btns) != 'undefined' && show_more_btns != null) {
    for (var i = 0; i < show_more_btns.length; i++) {
        console.log(show_more_btns[i].children[0])
        show_more_btns[i].children[0].setAttribute('id', 'show-more-'+i); 
        var show_more_id = 'show-more-'+i
        document.getElementById(show_more_id).addEventListener('click', showMoreOpenClose);
    }
}

function showMoreOpenClose(e) {
    
    console.log(document.getElementById(e.target.parentElement.id).classList)

    if (document.getElementById(e.target.parentElement.id).classList.length > 1) {

        var class_list = document.getElementById(e.target.parentElement.id).classList

        if (class_list[1] === 'open') {
            document.getElementById(e.target.parentElement.id).classList.remove('open')
            document.getElementById(e.target.parentElement.id).classList.add('closed')
        } else if (class_list[1] === 'closed') {
            document.getElementById(e.target.parentElement.id).classList.remove('closed')
            document.getElementById(e.target.parentElement.id).classList.add('open')
        }          
    } else {
        document.getElementById(e.target.parentElement.id).classList.add('open')
    }
}