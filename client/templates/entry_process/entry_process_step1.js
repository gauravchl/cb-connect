import './entry_process_step1.html';

const categories = [
  {
    id: 1,
    label_text: 'Coding/accountability partner',
    muted_text: '',
    value: 'category_1',
    active: true,
  },
  {
    id: 2,
    label_text: 'Feedback/career advice',
    muted_text: '',
    value: 'category_2',
    active: true,
  },
  {
    id: 3,
    label_text: 'Mentor',
    muted_text: '',
    value: 'category_3',
    active: true,
  },
  {
    id: 4,
    label_text: 'Mentee',
    muted_text: '(Offers to mentor/teach)',
    value: 'category_4',
    active: true,
  },
  {
    id: 5,
    label_text: 'OSS Project Maintainers',
    muted_text: '',
    value: 'category_5',
    active: true,
  },
  {
    id: 6,
    label_text: 'Potential new contributors to OSS projects',
    muted_text: '',
    value: 'category_6',
    active: true,
  },
  {
    id: 0,
    label_text: 'Something Else',
    muted_text: '(Not mentioned above)',
    value: 'category_0',
    active: true,
  },
]

Template.entry_process_step1.helpers({
  categories() {
    return categories;
  }
});
