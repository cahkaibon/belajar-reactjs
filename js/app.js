class NavBarRight extends React.Component {
	render() {
		return (
			<ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
            	<li><a href="#">Register</a></li>
            </ul>
		)
	}
}

class NavBarHeader extends React.Component {
	render() {
		return (
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
	                <span className="sr-only">Toggle Navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	            </button>

	            <a className="navbar-brand" href="#">
	                My Application
	            </a>
	        </div>
		)
	}
}

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-static-top">
        		<div className="container">            		
	                <NavBarHeader />

            		<div className="collapse navbar-collapse" id="app-navbar-collapse">
		                <NavBarRight />                		
            		</div>
        		</div>
    		</nav>
		)
	}
}

class FormLogin extends React.Component {
	render() {
		return (
			<form className="form-horizontal" role="form" method="POST">
				<div className="form-group">
                    <label for="email" className="col-md-4 control-label">E-Mail Address</label>

                    <div className="col-md-6">
                        <input id="email" type="email" className="form-control" name="email" value="" autofocus />
					</div>
                </div>

                <div className="form-group">
                    <label for="password" className="col-md-4 control-label">Password</label>

                    <div className="col-md-6">
                        <input id="password" type="password" className="form-control" name="password" />
					</div>
                </div>

                <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="remember" /> Remember Me
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-8 col-md-offset-4">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>

                        <a className="btn btn-link" href="#">
                            Forgot Your Password?
                        </a>
                    </div>
                </div>
			</form>
		)
	}
}

class Container extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="panel panel-default">
							<div className="panel-heading">Login</div>
							<div className="panel-body">
								<FormLogin />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
 

class MyApplication extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Container />
			</div>
		)
	}
}

ReactDOM.render(
    <MyApplication />,
    document.getElementById('app')
);