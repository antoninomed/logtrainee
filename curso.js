document.addEventListener('DOMContentLoaded', (event) => {
    var titulo = sessionStorage.getItem('buttonText');
    if (titulo) {
        document.getElementById('titulo').innerHTML = titulo;
    } else {
        document.getElementById('titulo').innerHTML = 'nada';
    }

    var link_video = document.getElementById('video');
    var link_video2 = document.getElementById('video2');
    novoH3=[]
    novoP=[]
    switch (titulo){
        //ADM--------------------------------
        //FINANCEIRO--------------------------------


        case 'Auditoria':
            link_video.src = "https://www.youtube.com/embed/2lTKtbSVMgA?si=mPZTYqj4qwoJil6m&amp;start=84";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=`Esse processo serve como reavaliação de contagem, ajudando a reduzir o número de devoluções.`

            for (i = 1; i < 6; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Passo 1`;
              novoP[1].textContent = `Verificação de Estoque.`;

              novoH3[2].textContent = `Passo 2`;
              novoP[2].textContent = `Conferência de quantidade; confirmar se a quantidade de item é a mesma do pedido ou previsão de envio.`;
             
              novoH3[3].textContent = `Passo 3`;
              novoP[3].textContent = `Verificação de qualidade.`;
              
              novoH3[4].textContent = `Passo 4`;
              novoP[4].textContent = `Identificação e rastreabilidade.`;
             
              novoH3[5].textContent = `Passo 5`;
              novoP[5].textContent = `Conferência de documentação, verificar se o documento de transporte e armazenagem está correto e alinhado com os produtos.`;
              
              

              break;

            
        case 'Reposição':
            link_video.src = "https://www.youtube.com/embed/nNKLtkZxq1o?si=GX5VScBAcEJ6hzX0";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=``
           
            for (i = 1; i < 8; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Passo 1`;
              novoP[1].textContent = `Entrar na aba reposição.`;

              novoH3[2].textContent = `Passo 2`;
              novoP[2].textContent = `Na aba ‘consultar’, consulte o estoque do produto que precisa ser reposto, identificando a quantidade atual.`;
             
              novoH3[3].textContent = `Passo 3`;
              novoP[3].textContent = `Localize o produto, verifique a quantidade e a validade.`;
              
              novoH3[4].textContent = `Passo 4`;
              novoP[4].textContent = `Selecione o local de destino e reposição física.`;
             
              novoH3[5].textContent = `Passo 5`;
              novoP[5].textContent = `Reposto o produto, registre a movimentação de estoque no coletor de dados.`;
              
              
              novoH3[6].textContent = `Passo 6`;
              novoP[6].textContent = `Realize uma conferência final, para registro correto dos produtos.`;
              
              
              novoH3[7].textContent = `Passo 7`;
              novoP[7].textContent = `Caso haja sobra de produtos, deve-se auditar e depois realizar a internação de tal.`;
              
              break;
            
            
        case 'Expedição de Loja':
            link_video.src = "https://drive.google.com/file/d/1oWMl7L9sGGMkNa_1TtaeKXLhdtUIN1Q7/preview";
            link_video2.src = "https://drive.google.com/file/d/1tbckMKyVTYuGtShePXjuywAxZZ8FLHv7/preview"
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=``
            for (i = 1; i < 7; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Passo 1`;
              novoP[1].textContent = `Entrar na aba expedição.`;

              novoH3[2].textContent = `Passo 2`;
              novoP[2].textContent = `Bipar o código de barra da doca.`;
             
              novoH3[3].textContent = `Passo 3`;
              novoP[3].textContent = `Adicionar placa do carro.`;
              
              novoH3[4].textContent = `Passo 4`;
              novoP[4].textContent = `Procurar a loja que foi passada por seu supervisor no pátio da doca, para dar início a pesagem e a filmagem dos paletes.`;
             
              novoH3[5].textContent = `Passo 5`;
              novoP[5].textContent = `Depois de pesado e embalados, os paletes recebem suas etiqueta de identificação.`;
              
              
              novoH3[6].textContent = `Passo 6`;
              novoP[6].textContent = `Concluído todo o processo, há o carregamento dos caminhões com os produtos conferidos e pesados.`;
              
              
              break;

        case 'Separação':
            link_video.src = "https://www.youtube.com/embed/Rd8pYpr0sF0?si=SMXBrq8Eaz7RVUAC";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=``
            for (i = 1; i < 6; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Passo 1 `;
              novoP[1].textContent = `Entrar na aba de separação.`;

              novoH3[2].textContent = `Passo 2`;
              novoP[2].textContent = `Iniciar o mapa, colocar o peso entre 20 a 23 kilos - peso do pallet.`;
             
              novoH3[3].textContent = `Passo 3`;
              novoP[3].textContent = `Pegar o peso do pallet, caso for abastecimento. Externa não pede pesagem.`;
              
              novoH3[4].textContent = `Passo 4`;
              novoP[4].textContent = `Olhar a cidade, rua, apartamento e verificar se é o produto correto.`;
             
              novoH3[5].textContent = `Passo 5`;
              novoP[5].textContent = `Após finalizar a separação dos produtos, levar a balança e tirar a etiqueta de identificação - produtos da externa. Se caso for abastecimento ou loja, pesar o pallet primeiro e depois colocar a etiqueta.`;
              
    
              
              break;

        case 'Recebimento':
            link_video.src = "https://drive.google.com/file/d/1Ax4AJFPVKFHRJYTaNpwpbM7G8l6w4r1m/preview";
            resumo = document.createElement('p')
            container = document.getElementById('titulo-texto')
            container.appendChild(resumo);
            resumo.textContent=``
            for (i = 1; i < 6; i++) {

                novoH3[i] = document.createElement('h3');
    
                // Cria um novo elemento p
                novoP[i] = document.createElement('p');
    
                // Encontra o contêiner onde os elementos serão adicionados
                const container = document.getElementById('titulo-texto');
    
                // Adiciona o h3 e o p ao contêiner
                container.appendChild(novoH3[i]);
                container.appendChild(novoP[i]);
                
              }
             

              novoH3[1].textContent = `Passo 1 `;
              novoP[1].textContent = `Assim que o polo recebe as informações dos produtos que serão entregues é criado o processo de recebimento desses materiais, que é chamado de romaneio de entrada.`;

              novoH3[2].textContent = `Passo 2`;
              novoP[2].textContent = `Com a chegada da mercadoria o conferente utiliza o coletor de dados para conferir os produtos recém chegados.`;
             
              novoH3[3].textContent = `Passo 3`;
              novoP[3].textContent = `O conferente escolhe qual processo será utilizado para a conferência e identifica o cliente proprietário dos produtos.`;
              
              novoH3[4].textContent = `Passo 4`;
              novoP[4].textContent = `Verificação de avarias e vencimento dos produtos.`;
             
              novoH3[5].textContent = `Passo 5`;
              novoP[5].textContent = `Ao concluir todo processo, os produtos são organizados e depois armazenado no seu lugares provenientes.`;
              
    
              
              break;

        default:

    }

    if (link_video2.src!="https://drive.google.com/file/d/1tbckMKyVTYuGtShePXjuywAxZZ8FLHv7/preview"){
        video2.style.display = 'none';
    }

});
