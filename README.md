# Catálogo de Filmes

Este é um projeto de catálogo de filmes desenvolvido como parte de um **Case Técnico**. Ele consiste em uma aplicação web com duas partes: um backend desenvolvido em Spring Boot para fornecer uma API RESTful para manipulação de um catálogo de filmes e um frontend desenvolvido em Angular para interação com o usuário.

## Pré-requisitos

- Docker instalado
- Node.js instalado
- Maven instalado
- Java JDK instalado

## Executando a aplicação

Para executar a aplicação, siga as etapas abaixo:


- Clone este repositório em sua máquina local:
```
git clone https://github.com/seu-usuario/movie-catalog.git
```

- Navegue até o diretório do projeto:
```
cd movie-catalog
```

- Execute o script de execução (powershell ou bash, dependendo do seu sistema operacional):

#### PowerShell (Windows):
```
.\executar-aplicacoes.ps1
```

#### Bash (Linux/Mac):
```
./executar-aplicacoes.sh
```

Isso iniciará o banco de dados PostgreSQL em um contêiner Docker, executará a aplicação Spring Boot e iniciará a aplicação Angular. Após a conclusão destes passos, você poderá acessar a aplicação no navegador.

## Decisões de desenvolvimento

Durante o desenvolvimento deste projeto, foram tomadas várias decisões com relação à arquitetura, padrões de projeto e uso de frameworks:

- **Arquitetura**: A aplicação segue uma arquitetura de cliente-servidor, onde o frontend (Angular) interage com o backend (Spring Boot) por meio de uma API RESTful.

- **Padrão de projeto**: O backend utiliza o padrão de projeto MVC (Model-View-Controller) para separar as responsabilidades entre os modelos de dados, as rotas e os controladores. O frontend segue o padrão de projeto MVVM (Model-View-ViewModel), com a lógica de negócios contida nos serviços.

- **Frameworks**: Foram escolhidos o Spring Boot e o Angular devido à sua popularidade, robustez e vasta documentação. O Spring Boot simplifica o desenvolvimento de aplicativos Java, enquanto o Angular oferece uma estrutura poderosa para construir interfaces de usuário interativas.

- **Banco de dados**: O PostgreSQL foi escolhido como banco de dados devido à sua confiabilidade, recursos avançados e compatibilidade com o Spring Boot.

- **Docker**: Utilizou-se Docker para facilitar a configuração do ambiente de desenvolvimento e garantir que a aplicação seja executada de forma consistente em diferentes ambientes.

