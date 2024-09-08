import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeDefined();
    expect(screen.getByText('Learn React')).toBeDefined();
    expect(screen.getByText('Build a Todo App')).toBeDefined();
    expect(screen.getByText('Write tests')).toBeDefined();
});

it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeDefined();
});

it('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    fireEvent.click(todoItem);
    expect(todoItem.style.textDecoration).toBe('line-through');

    fireEvent.click(todoItem);
    expect(todoItem.style.textDecoration).toBe('none');
});

it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
    const todoToDelete = screen.getByText('Learn React');

    fireEvent.click(deleteButton);
    expect(() => screen.getByText('Learn React')).toThrow();
});
});
