/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1- listagem
2- Cartao do pokémon

precisamos criar duas variavei no JS pra trabalhar com os elementos da tela 

vamos precisar trabalhar com um evento de clique feito pelo usúario na listagem de pokémons 

-remover a classe aberto só do cartao que está aberto

- ao clicar em umpokémon da listagem pegamos ao id desse pokémon pra saber qual cartao mostrar 

-remover a classe ativo que marca o pokemon selecionado

-adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variavei no JS pra trabalhar com os elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll('.Pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',()=>{
      const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')
      
      const idPokemonSelecionado = pokemon.attributes.id.value
      
      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')
      
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')
      
      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
      
     })
} )


