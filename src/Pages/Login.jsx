import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

    const login =(event)=>{
        event.preventDefault()
        navigate('/Home')
    }

  return (
    <Container>
        <main className="form-signin w-100 m-auto" style={{maxWidth: '30%'}}>
                <form onSubmit={login}>
                  <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <div className="form-floating">
                    <label for="floatingInput">Email</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="Digite seu E-mail"/>
                  </div>
                  <div className="form-floating">
                    <label for="floatingPassword">Senha</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Digite a senha"/>
                  </div>

                  <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                      Lembrar depois
                    </label>
                  </div>
                  <Button className='w-100 py-2' variant="primary" type='submit'>Entrar</Button>
                 
                
                </form>
          </main>
    </Container>

  )
}
