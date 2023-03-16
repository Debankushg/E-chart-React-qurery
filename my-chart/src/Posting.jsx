import React, { useState } from 'react'
import { getFetchUsers, postEmployeeData } from './Api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';




const Posting = () => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')



  // const onSuccess =(data) => {
  //   console.log('Perform side effect after data fetching' , data);
  // }

  // const onError =(error) => {
  //   console.log('Perform side effect after encountering error', error);
  // }


  const useAddEmployeeData = () => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: postEmployeeData,
      onSuccess: () => {
        queryClient.invalidateQueries('data')
      },
    }
    )
  }

  const { mutate } = useAddEmployeeData()
  // const { mutate } = useMutation({ mutationFn: postEmployeeData })


  const { isLoading, data, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: getFetchUsers,
    // staleTime:0,
    // cacheTime:5000,
    // refetchOnMount:false,
    // refetchOnWindowFocus:false,
    // refetchInterval:2000,
    // refetchIntervalInBackground:true,
    // enabled:false,
    // onSuccess,
    // onError,
    // onError: error => {
    //   console.log(error)
    // },
    // onSuccess: data => {
    //   console.log(data)
    // },
    select: (data) => {
      const employees = data.data.map((emp) => emp.name)
      return employees
    }
  });


  const handleAddEmployee = () => {
    console.log({ name, email });
    const employees = { name, email }
    mutate(employees)
  }

  if (isLoading || isFetching) {
    return <h2>Loading... data</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>Employees Names Page</h2>
      <div>
        <span>Name :</span>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
        <span>Email Address :</span>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleAddEmployee}>Add Hero</button>
      </div>
      <br />
      <button onClick={refetch}>Fetching data</button>
      {/* {
          data?.data.map(emp => {
            return  <div key={emp.id}>{emp.name}</div>

          })
        } */}
      {
        data.map((name) => {
          return <div key={name.id}>{name} {email}</div>
        })}
    </>
  )

}

export default Posting