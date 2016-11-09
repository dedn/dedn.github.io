$(document).ready(function () {
    //Popup
    $('#reference-button').bind("touchstart", function () {
        $('#reference-popup').addClass('show');
        $('#reference-popup-close').bind("touchstart", function () {
            $('#reference-popup').removeClass('show');
            return false;
        });

        return false;
    });

    $('#training-button').bind("touchstart", function () {
        $('#training-popup').addClass('show');
        $('#training-popup-close').bind("touchstart", function () {
            $('#training-popup').removeClass('show');
            return false;
        });

        return false;
    });

    //Menu
    function toggleMenu() {
        if (menu.style.right === '0px') {
            hideMenu();
        } else {
            showMenu();
        }

        return false;
    }

    function showMenu() {
        if (menu.style.right !== '0px') {
            $('#menu-foreground').show();
            menuToggleBtn.src = './img/menu/menu-close.png';
            menu.style.right = '0';
        }
    }

    function hideMenu() {
        if (menu.style.right === '0px') {
            menuToggleBtn.src = './img/menu/menu-open.png';
            menu.style.right = '-34%';
            setTimeout(function () {
                $('#menu-foreground').hide();
            }, 1000);
        }
    }

    $('#menu-foreground').bind("touchstart", hideMenu);
    $('#menuButton').bind("touchstart", toggleMenu);

    //Popup doesn`t work if menu foreground was not toggled
    $('#menu-foreground').show();
    $('#menu-foreground').hide();
});

document.ontouchmove = function (event) {
    event.preventDefault();
    event.stopPropagation();

    return false;
};
