import { useState, FormEvent } from 'react'
import styles from './TaskList.module.css';
import { Trash, PlusCircle, Check  } from 'phosphor-react';
import { Empty } from './Empty';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList(){

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [tasksFinished, setTasksFinished] = useState(0)


  function handleCreateNewTask(event : FormEvent) {
    event.preventDefault();

    if(!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks(oldState => [...oldState, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task)

    setTasks(newTasks)

    setTasksFinished(tasksFinished + 1);
  }

  function handleRemoveTask(id: number) {
    const filteredTask = tasks.filter(task => task.id !== id);

    setTasks(filteredTask)
  }

  const totalDoneTasks = tasks.reduce(
    (total, task) => (total += task.isComplete ? 1 : 0),
    0
  );

    return(
        <section>
          <form>
            <div className={styles.inputGroup}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    required
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <button type="submit" onClick={handleCreateNewTask}>
                  <strong>Criar</strong> <PlusCircle size={20} />
                </button>
            </div>
          </form>

          <header className={styles.info}>
            <p>Tarefas Criadas <span>{tasks.length}</span></p>
            <p>Concluidas <span>{tasks.length === 0 ? tasks.length : `${tasks.length} de ${totalDoneTasks}`}</span></p>
          </header>

          <main >
            {tasks.length === 0 ? <Empty /> : 
            <ul>
              {tasks.map(task => (
                <li key={task.id}>
                  <div className={styles.container}>
                    <button
                      className={task.isComplete === true ? styles.checkDoneButton : styles.checkButton}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    >
                    {task.isComplete === true ? <Check /> : ''}
                    </button>

                    <span className={task.isComplete === true ? styles.titleDone : styles.title}>
                      {task.title}
                    </span>

                    <button className={styles.trashButton} onClick={() => handleRemoveTask(task.id)}>
                      <Trash size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            }
          </main>
        </section>
    )
}