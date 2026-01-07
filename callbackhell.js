const student_details = () => {
  console.log("student info");

  setTimeout(() => {
    let roll_numbers = [1, 2, 3, 4];
    console.log(roll_numbers);

    setTimeout(
      (roll_num) => {
        const data = {
          sname: "ashok",
          qualification: "btech",
        };

        console.log(
          `student name is ${data.sname}
qualification is ${data.qualification}
roll number is ${roll_num}`
        );
      },
      2000,
      roll_numbers[1]
    );
  }, 2000);
};

student_details();
