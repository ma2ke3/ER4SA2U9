let menu = document.getElementById("menu");
function mostrarMenu(){
    if(menu.style.display !="flex"){
    menu.style.display = "flex"
    }else{
    menu.style.display = "none"
    }}

// codigo de menu toggle JQuery modo 1 (funcionando)
$(document).ready(function(){
    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")
    })
})


// //codigo do carrosel simples feito em aula
//     $(document).ready(function(){
//     $("#carrosel img:eq(0)").addClass("highlights-ativo").show()
// })

// setInterval(slide,2000)

// function slide(){

//     if($(".highlights-ativo").next().length){
//         $(".highlights-ativo").removeClass("highlights-ativo").hide().next().addClass("highlights-ativo").show()
//     }else{
//         $(".highlights-ativo").removeClass().hide()
//         $("#carrosel img:eq(0)").addClass("highlights-ativo").show()
//     }
// }

// codigo de JQuery modo 2
//     $("#barras").click(function(){
//         if($("#menu").hasClass("menu-ativo")){
//             $("#menu").removeClass("menu-ativo")
//         }else{
//             $("#menu").addClass("menu-ativo")
//         }
//     })
// })

//removi o onload do .html, porque não dava certo o conteúdo dinâmico
// testar de novo, com ajuda da Jéssica
// let highlights1 = [
//     {
//         titulo: "abc",
//         descricao: "def"
//     },
//     {
//         titulo: "ghi",
//         descricao: "jkl"
//     },
// ]
// function renderizarHighlights() {
//     let espaco = document.getElementById("highlightPrincipal")
//     let template = "";
//     for (let index = 0; index < highlights1; index++) {
//         const high = highlights1[index];
//         template += `<div class="banner1">
//         <img src="Imagens/image-1.png" style="width: 600px; height: 300px;">
//         <h3>${hightlights1.titulo}</h3>
//         <p>${highlights1.descricao}</p>
//     </div>`
//     }
//     espaco.innerHTML = template;
// }