import { Component } from "react";



class TodoList extends Component {
    
    constructor() {
        super();
        this.state = {
            userInput : "",
            items : []
        };
    }

    onChange(event) {
        this.setState({
            userInput : event.target.value
        });
    }


    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: "",
            items : [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event) {
        event.preventDefault();
        const array = this.state.items
        const index = array.indexOf(event.target.value)
        array.splice(index, 1);
        this.setState({
            items : array
        })

    }
    
    
    
    renderTodo(event) {
        return this.state.items.map((item) => {
            return (
                <div>
                    {item} | <button onClick={this.deleteTodo.bind(this)} class="btn btn-primary">
                        
                        Supprimer</button>
                </div>
            );
        });

    }
    
    
    
    render() {
        return(
            <div>
                <h1>Ma todo List</h1>
                <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <input 
                    class="form-control"
                    value={this.state.userInput}
                    type="text" 
                    placeholder="Renseingner votre item"
                    onChange={this.onChange.bind(this)}
                    />
                    
                    <button onClick={this.addTodo.bind(this)}
                    class="btn btn-primary"
                    >
                        Ajouter</button>
                </form>
                <div>
                    {this.renderTodo()}
                </div>
            </div>
        )
    }
}

export default TodoList;