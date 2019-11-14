import app from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

class Firebase {
  constructor() {
    // Persistência de Dados
    app.firestore().settings({persistence: true});

    // Auth
    this.auth = app.auth();
    // Database
    this.firestore = app.firestore();
  }

  /* AUTH */

  // LOGIN
  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  // LOGOUT
  signOut = () => this.auth.signOut()

  // ENVIAR EMAIL PARA RESETAR A SENHA
  resetPassword = email => this.auth.sendPasswordResetEmail(email)

  // SABER SE ALGUÉM ESTÁ LOGADO
  isLogged = () => {
    let u = false
    this.auth.onAuthStateChanged(user => {
      if (user) {
        u = true;
      } else {
        u = false
      }
    })
    return u
  }

  /* ADMIN */

  // CHECA SE O USUÁRIO LOGADO É ADMIN
  checkAdmin = () => this.firestore.collection('admins').doc(this.auth.currentUser.uid)
}
