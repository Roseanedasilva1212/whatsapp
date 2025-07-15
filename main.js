  function abrirWhatsApp() {
      const numero = '5581986500469'; // Coloque o número com DDI e DDD
      const mensagem = encodeURIComponent('Olá, vim pelo seu site! 😊');
      const url = `https://wa.me/${numero}?text=${mensagem}`;
      window.open(url, '_blank');
    }

    const mensagem = encodeURIComponent('Olá, vim pelo seu site! 😊');
