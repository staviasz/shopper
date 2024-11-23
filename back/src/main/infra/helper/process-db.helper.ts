import db from './prisma.helper';

const gracefulShutdown = async () => {
  console.log('Encerrando a aplicação...');
  db.disconnect();
  console.log('Conexão com o banco fechada com sucesso.');
};
process.on('SIGINT', gracefulShutdown);
