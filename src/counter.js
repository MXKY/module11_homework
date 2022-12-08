export function countDown(number) {
    if (number < 1)
        return "Число не может быть меньше единицы.";

    if (number > 100)
        return "Число не может быть больше ста.";
        
    let answer = String();

    for (let i = number; i >= 1; i--)
        answer += i;

    return answer;
}