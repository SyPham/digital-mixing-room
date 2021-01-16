using System.Threading.Tasks;
using DMR_API._Repositories.Interface;
using DMR_API.Data;
using DMR_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using DMR_API.DTO;
using System.Collections.Generic;
using AutoMapper;

namespace DMR_API._Repositories.Repositories
{
    public class ToDoListRepository : ECRepository<ToDoList>, IToDoListRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ToDoListRepository(DataContext context, IMapper mapper) : base(context)
        {
            _context = context;
            _mapper = mapper;
        }

        public void UpdateRange(List<ToDoList> toDoLists)
        {
            _context.ToDoList.UpdateRange(toDoLists);
        }
    }
}