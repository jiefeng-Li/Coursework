
function changeToNight() {
    document.body.children[0].style.backgroundColor = 'black';

    console.log('change to night theme');
    btn.className = 'changeNight';
    btn.innerText='☾';
    //修改切换主题按钮


    for (let i = 0; i < nav_a.length; i++) {
        if (nav_a[i].className == 'activeDay')
            nav_a[i].className = 'activeNight';
        else
            nav_a[i].className = 'normalNight';
    }

    ctnt[0].style.backgroundColor='#222';
    for (let i = 0; i < ctnt_a.length; i++) {
        if (ctnt_a[i].className == 'activeDayCnt')
            ctnt_a[i].className = 'activeNightCnt';
        else
            ctnt_a[i].className = 'normalNightCnt';
    }

    ctnt_right.style.backgroundColor='gray';
    ctnt_right.children[1].style.backgroundColor='black';
    ctnt_right.children[1].style.color='white';
    //content->right

    ft[0].style.backgroundColor='gray';
    ft[0].children[2].style.backgroundColor = 'black';
}




function changeToDay() {
    document.body.children[0].style.backgroundColor = 'aliceblue';
    
    console.log('change to day theme');
    btn.className = 'changeDay';
    btn.innerText='☀';
    //修改切换主题按钮

    nav.style.backgroundColor='#999';

    for (let i = 0; i < nav_a.length; i++) {
        if (nav_a[i].className == 'activeNight')
            nav_a[i].className = 'activeDay';
        else
            nav_a[i].className = 'normalDay';
    }

    ctnt[0].style.backgroundColor='skyblue';

    for (let i = 0; i < ctnt_a.length; i++) {
        if (ctnt_a[i].className == 'activeNightCnt')
            ctnt_a[i].className = 'activeDayCnt';
        else
            ctnt_a[i].className = 'normalDayCnt';
    }

    ctnt_right.style.backgroundColor='white';
    ctnt_right.children[1].style.backgroundColor='antiquewhite';
    ctnt_right.children[1].style.color='black';
    //content->right

    ft[0].style.backgroundColor='brown';
    ft[0].children[2].style.backgroundColor = 'white';
}