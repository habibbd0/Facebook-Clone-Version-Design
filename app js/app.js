let message = document.querySelector('.icons');
let ShowMessage =document.querySelector('.fb-message');

message.addEventListener('click', function()
{
     ShowMessage.classList.toggle('active')
     profileShow.classList.remove('active')
     notificationShow.classList.remove('active')
})

// notification design start

let notification = document.querySelector('.noti-fica')
let notificationShow = document.querySelector('.fb-notification')

notification.addEventListener('click',function(){
     notificationShow.classList.toggle('active')
     ShowMessage.classList.remove('active')
     profileShow.classList.remove('active')
})
// notification design end

// profile design start
let admin = document.querySelector('.admin');
 let profileShow = document.querySelector('.fb-profile');

 admin.addEventListener('click',function(){
     profileShow.classList.toggle('active')
     notificationShow.classList.remove('active')
     ShowMessage.classList.remove('active')
 })
// profile design end

console.log(profileShow);