class matriz{

    constructor(){
        this.arrayLinhas = [];
        this.arrayColunas = [];
    }

    alimentarTamanhoMatriz(){
        const botaoGerar = document.getElementById('gerar');
        botaoGerar.addEventListener('click',()=>{
            let linha = document.getElementById('linhas').value;
            let coluna = document.getElementById('colunas').value;
            console.log('tamanho da linha no alimentarMatriz: '+ linha);
                    for(let i=0; i<linha; i++){
                        this.arrayLinhas.push(i);
                    }

                    for(let j=0; j<coluna; j++){
                        this.arrayColunas.push(j);
                    }
                    
                    console.log(`tamanho da linha: ${this.arrayLinhas} : tamanho col: ${this.arrayColunas}`);
                   this.verificaQuadrado();
        });
        
        
    }

    criarMatriz(){
        const botaoGerar = document.getElementById('gerar');
        botaoGerar.addEventListener('click',()=>{
           //    this.verificaQuadrado();
            let tbody = document.getElementById('tbody');
            for (let i = 0; i<this.arrayLinhas.length; i++){
                var tr = tbody.insertRow();
                for(let j = 0; j<this.arrayColunas.length; j++){
                    let td = tr.insertCell();
                    if(i < this.arrayColunas.length){
                        td.innerText = `${i+1}`;
                        td.innerText += `${j+1}`;
                    }
                    
                    
                }
            }         
        }); 
    }

/*     preencherIndices(){
        for(let i = 0; i<this.arrayLinhas; i++){
            let tr = this.arrayLinhas[i].innerText = '1'; 
        }
        this.verificaQuadrado();
    } */
  

    limparArrays(){
        const botaoresetar = document.getElementById('resetar');
        botaoresetar.addEventListener('click', ()=>{
            for(let i= this.arrayLinhas.length; i>0; i--){
                this.arrayLinhas.pop();
               }
               for(let j = this.arrayColunas.length; j>0; j--){
                this.arrayColunas.pop();
               }
               console.log('removendo');
               console.log(`tamanho da array linha: ${this.arrayLinhas.length}
                tamanho da arrya coluna: ${this.arrayColunas.length}`);
                window.location.reload();
        });
    
    }

    verificaQuadrado(){
        const destacar = document.getElementById('destacar'); //check
        const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
        const quadLinha = document.getElementById('linhas');//input valor linha
        const quadColuna = document.getElementById('colunas');//input valor coluna
        const Campodestacar = document.getElementById('campoDestacar');

        quadLinha.addEventListener('blur',()=>{
            console.log('teste blur');
            const linha = document.getElementById('linhas').value;
            const coluna = document.getElementById('colunas').value;
            
            console.log(`verifica quad ${linha} ${coluna}`);

            const destacar = document.getElementById('destacar'); //check
            const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
            
            if(linha==coluna){
                console.log(Campodestacar);
                Campodestacar.style.display='block';
                destDiag.style.display='none';
            }else{
                Campodestacar.style.display='none';
                destDiag.style.display='none';
            }

            if(destacar.checked){
                console.log('check esta marcado');
                destDiag.style.display='block';
    
               }else{
                console.log('check esta desmarcado');
                destDiag.style.display='none';
               }

        });

        quadColuna.addEventListener('blur',()=>{
            console.log('teste blur');
            const linha = document.getElementById('linhas').value;
            const coluna = document.getElementById('colunas').value;
            
            console.log(`verifica quad ${linha} ${coluna}`);

            const destacar = document.getElementById('destacar'); //check
            const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
            
            if(linha==coluna){
                console.log(Campodestacar);
                Campodestacar.style.display='block';
                destDiag.style.display='none';
            }else{
                Campodestacar.style.display='none';
                destDiag.style.display='none';
            }

            if(destacar.checked){
                console.log('check esta marcado');
                destDiag.style.display='block';
    
               }else{
                console.log('check esta desmarcado');
                destDiag.style.display='none';
               }
            

        });

        destacar.addEventListener('click',()=>{
            const destacar = document.getElementById('destacar'); //check
            const destDiag = document.getElementById('destaqueDiagonal');//CampoDasCores
           if(destacar.checked){
            console.log('check esta marcado!');
            destDiag.style.display='block';

           }else{
            console.log('check esta desmarcado');
            destDiag.style.display='none';
           }

        });

    }

    colorirPrincipal(){
        const confirmarCor = document.getElementById('confirmarCor');
        confirmarCor.addEventListener('click', ()=>{
            const corPrincipal = document.getElementById('principal').value;
            const corSecundaria = document.getElementById('secundaria').value;
            console.log(corPrincipal,corSecundaria);
            let tdPrincipal = document.querySelectorAll('td');

            let tdCorP = Array.from(tdPrincipal);
            
            let tdCoraux = tdCorP.filter((valor,chave)=>{
                let aux = this.arrayLinhas.length +1;
                return chave %aux ==0;
            }).forEach((valor, indice, array)=> {
                array[indice].style.backgroundColor = corPrincipal;
            });

            let tdSecundaria = document.querySelectorAll('td');

            let tdCorS = Array.from(tdSecundaria);
            let tdCoraux2 = tdCorS.filter((valor, chave, array)=>{
                let aux = this.arrayLinhas.length - 1;
                let aux2 = (this.arrayLinhas.length * this.arrayLinhas.length) -1;
                
                return chave % aux == 0 && chave !=0 && chave != aux2 || chave == aux;
            }).forEach((valor,indice,array)=>{

                array[indice].style.backgroundColor = corSecundaria;
            })

        });//eventListener      ((chave == aux || chave %aux == 0) && chave !=0)  (((chave == aux && chave != aux2-1)|| chave %aux == 0) && chave !=0)
        
    }


}

let teste = new matriz();
teste.verificaQuadrado();
teste.alimentarTamanhoMatriz();
teste.criarMatriz();
teste.colorirPrincipal();
//teste.preencherIndices();
teste.limparArrays();


