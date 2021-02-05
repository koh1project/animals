# 柴犬のいる暮らし

## プロジェクトについて
  
React × TypeScript を使ったウェブサイト作成を行う目的で作成しました。  
作成にあたり、下記の条件先行でプロジェクトを検討しました。

- React と TypeScriptを使用すること
- フロントエンドのみの実装で完了できること
- Firebaseのホスティングサービスで公開すること
- CI/CDの手法を取り入れること

上記を踏まえた結果、公開APIを使用することでフロントエンドのみの実装で行える画像表示アプリを作成することにしました。  
柴犬を選んだのは、単純に作者の好みです。  
  

## 使用した技術諸々リスト
- React
- TypeScript
- Material-UI
- styled-components  
- prettier
- eslint
- Jest
- Enzyme
- Firebase Hosting
- CircleCL
  
## CI/CDの視点
CircleCIとGithubを連携させ、pushの度にテストが実行される環境を最低限整えました。  
masterブランチが更新された際にはFirebaseへの自動デプロイが行われる設定を行いました。  
基本的にはmasterへの更新はdevelopブランチからプルリクエストを経由するようにして、開発の流れに則るようにしています。  
  
~~ちょっとした修正とかで手順がめんどくさい時はmasterにpushしたりすることもあります。~~　　
  
  
## 開発環境設定  
リポジトリをクローン後コマンドラインより  
`npm install`  
を行ってください。  
  
サイドコマンドラインより  
`npm start`  
と入力することでローカルサーバーが立ち上がります。
