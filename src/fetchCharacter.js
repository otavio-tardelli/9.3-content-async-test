const fetchCharacter = async (id) => {
  // Recebemos como parâmetro o id
  try {
    const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
    // Aguardamos a promise do fetch ser resolvida
    const promiseFetch = await fetch(URL)
    // Aguardamos a promise do json ser resolvida
    const results = await promiseFetch.json();

    //Retornamos o resultado da nossa requisição
    return results;
  } catch (error) {
    // Caso algo aconteça e nossa requisição não seja realizada com sucesso
    // capturamos e retornamos essa exceção.
    return error;
  }
};

it('verifica o nome do personagem', async () => {
  const charater = await fetchCharacter('720');
  expect(charater.name).toBe('Wonder Woman');
})

it('Verifica se retorna erro ao executar uma função sem parâmetro', async () => {
  const fail = await fetchCharacter();
  expect(fail).toEqual(new Error ('You must provide an url'))
})

it('Verifica se retorna erro ao executar função com parâmetro que não existe', async () => {
  const response = await fetchCharacter('teste parametro errado')
  expect(response).toBe('Invalid id');
})

it('verifica se a URL é correta', async () => {
  const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
  await fetchCharacter('720');
  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenCalledWith(url);
})

// const fetchCharacter = async (id) => {
//   const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
//   const promise = fetch(URL)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => error);

//     return promise;
// };

module.exports = {
  fetchCharacter,
};
