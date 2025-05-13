const inputUser = document.querySelector("#log-usuario")
const inputPasseword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const  btnRegister = document.querySelector("#SignInBtn")

const cadastrarUsuario = () => {
    let user = inputUser.value
    let password = inputPasseword.value
    let confirmPassword = inputConfirmPassword.value

    if (password == confirmPassword && user.trim() != "") {
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = `../../index.html`
        alert("cadastro finalizado com sucesso!")
        return;
    }
    alert("falha no cadastro!")
}

btnRegister.addEventListener("click", cadastrarUsuario)