# ListMapsTon - Aplicativo de Cálculos e Mapas Interativos

**ListMapsTon** é um aplicativo mobile desenvolvido em **React Native** com funcionalidades de cálculos e navegação interativa. O aplicativo oferece ao usuário a capacidade de realizar cálculos físicos, visualizar pontos turísticos em um mapa, e explorar áreas geográficas, tudo isso de forma simples e intuitiva.

## Funcionalidades

1. **Cálculo de Velocidade Média**
   - O usuário insere a **distância (em metros)** e o **tempo (em segundos)** e o aplicativo calcula a **velocidade média** usando a fórmula `v = d / t`.
   
2. **Cálculo de Força ou Aceleração**
   - O usuário escolhe entre calcular a **força** ou a **aceleração**.
   - Para a **força**, insere a **massa (em kg)** e a **aceleração (em m/s²)**.
   - Para a **aceleração**, insere a **massa (em kg)** e a **força (em Newtons)**.

3. **Cálculo de Energia Potencial**
   - O usuário insere a **massa (em kg)** e a **altura (em metros)** do objeto, e o aplicativo calcula a **energia potencial gravitacional** utilizando a fórmula `Ep = m * g * h`, onde `g = 9.8 m/s²` (aceleração da gravidade).

4. **Mapeamento de Pontos Turísticos**
   - O aplicativo exibe um mapa com marcadores para pontos turísticos em **Cotia**, como o **Templo Zu Lai**, **Granja Viana** e **Parque Cemucam**.
   - Ao clicar nos marcadores, são exibidos detalhes sobre os locais, incluindo uma descrição e uma imagem.

5. **Interação com o Mapa**
   - O usuário pode inserir **latitude** e **longitude** manualmente para mover o mapa para uma localização específica.
   - O mapa começa com uma área inicial de **Cotia**, com um zoom médio, e pode ser explorado com o botão **"Explorar"** que aumenta o zoom para uma área comercial.

6. **Área de Exploração**
   - Ao clicar no botão **"Explorar"**, o mapa aumenta o zoom para uma área comercial, mostrando os pontos turísticos de forma mais próxima.

## Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento de aplicativos móveis.
- **React Navigation** - Biblioteca para navegação entre telas, utilizando **Drawer Navigator**.
- **React Native Maps** - Biblioteca para integração de mapas no aplicativo.
- **Expo** (caso você esteja usando Expo) - Ferramenta de desenvolvimento para React Native.
  
## Instalação

### Pré-requisitos

- **Node.js** instalado (preferencialmente a versão 14 ou superior).
- **Expo CLI** (caso esteja usando Expo) ou **React Native CLI**.
- **Android Studio** ou **Xcode** (para testar no emulador).

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/FelipeFeitosaBraga/ListMapsTon.git
    cd ListMapsTon
    ```

2. Instale as dependências:

    Se estiver usando **Expo**:

    ```bash
    npm install
    ```

    Se estiver usando **React Native CLI**:

    ```bash
    yarn install
    ```

3. Inicie o servidor:

    Para **Expo**:

    ```bash
    expo start
    ```

    Para **React Native CLI**:

    ```bash
    npx react-native start
    ```

4. Execute no dispositivo ou emulador:

    Para **Expo**:

    ```bash
    expo start
    ```

    Para **React Native CLI**:

    ```bash
    npx react-native run-android    # Para Android
    npx react-native run-ios        # Para iOS
    ```

## Como Usar

1. **Tela de Cálculo de Velocidade**: Insira a distância percorrida em metros e o tempo gasto em segundos, clique em "Calcular" para obter a velocidade média em metros por segundo.
   
2. **Tela de Cálculo de Força ou Aceleração**: Selecione a operação que deseja calcular (força ou aceleração), insira os dados necessários (massa, aceleração ou força) e clique em "Calcular" para obter o resultado.

3. **Tela de Energia Potencial**: Insira a massa do objeto e a altura, clique em "Calcular" para obter a energia potencial.

4. **Tela de Mapa Turístico**: O mapa exibe pontos turísticos em Cotia com marcadores. Ao clicar em cada marcador, informações sobre o ponto turístico são exibidas. Utilize o botão "Explorar" para aumentar o zoom na área comercial.

5. **Mover o Mapa**: Insira as coordenadas de latitude e longitude para mover o mapa para uma localização específica.

## Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações.
4. Envie um pull request explicando as modificações feitas.


### Autor

Felipe Feitosa Braga  
GitHub: [@FelipeFeitosaBraga](https://github.com/FelipeFeitosaBraga)

