function enviar() {
    event.preventDefault()
    //não carregar a pagina aou clicar no botão
    Swal.fire({
        title: "parabens",
        text: "você enviou seus dados",
        icon: "success"
      });
}