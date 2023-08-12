    var salesData = {
        labels: ['Antes da BWS', 'Depois da BWS'],
        datasets: [{
            label: 'Vendas',
            data: [54, 92], 
            backgroundColor: ['rgba(255, 235, 59, 0.6)', 'rgba(255, 193, 7, 0.6)'], // Tonalidades de amarelo
            borderColor: ['rgba(255, 235, 59, 1)', 'rgba(255, 193, 7, 1)'], // Tonalidades de amarelo (bordas)
            borderWidth: 1
        }]
    };

    var chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };
    var ctx = document.getElementById('salesChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: chartOptions
    });
        // Verifica se a largura da tela é menor que um determinado valor (por exemplo, 768 para dispositivos móveis)
        function isMobile() {
            return window.innerWidth < 768;
        }

        // Move a div user-profile para dentro da main e ajusta a margem
        function moveUserProfile() {
            var userDiv = $('.user-profile');
            var main = $('main');

            if (isMobile() && userDiv.length && main.length) {
                userDiv.prependTo(main);
                userDiv.css('margin-bottom', '20px'); // Adicione a margem desejada
            } else {
                userDiv.css('margin-bottom', '0'); // Volta à margem normal
            }
        }

        // Chama a função quando a página carregar e quando a tela for redimensionada
        $(document).ready(function () {
            moveUserProfile();
        });
        $(window).resize(function () {
            moveUserProfile();
        });