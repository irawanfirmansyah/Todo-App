import { TableTodo } from '@/components/TodoComponents'
import Todo from '@/views/Todo.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('Todo.vue', () => {
  describe('with a default store', () => {
    let store, getters, actions, cmp;
    beforeEach(() => {
      //Mock Vuex with empty store
      actions = {
        loadTodos: jest.fn(),
      };
      getters = {
        getTodos: () => [],
        getTodoById: () => undefined,
        isLoading: () => false,
      };
      store = new Vuex.Store({ actions, getters });

      cmp = shallowMount(Todo, { store, localVue });
    });
    it('dispatches "loadTodos" when component is created', () => {
      expect(actions.loadTodos).toHaveBeenCalled();
    });
    it('contains danger text "...no todo added yet"', () => {
      expect(cmp.html()).toContain('Whoops! There is no ToDo added yet.');
    });
  });
  describe('which store is filled', () => {
    let store, getters, actions, cmp;
    beforeEach(() => {
      //Store data to Vuex store thus store doesn't empty
      var todos = [{
        id: 1,
        description: 'this is description',
        date: '2019-06-26'
      },];
      actions = {
        loadTodos: jest.fn(),
      };
      getters = {
        getTodos: () => [...todos],
        getTodoById: () => todos[0],
        isLoading: () => false,
      };
      store = new Vuex.Store({ actions, getters });

      cmp = shallowMount(Todo, { store, localVue });
    });
    it('doesnt render danger text', () => {
      expect(cmp.html()).not.toContain('Whoops! There is no ToDo added yet.');
    });
    it('then should render table component', () => {
      expect(cmp.contains(TableTodo)).toBe(true);
    });
  });
});