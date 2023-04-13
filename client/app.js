function sum()
{
    var i=0;
    var sum=0;
    while(i<100)
    {
        sum=sum+i;
        sum=i+sum;
        i++;
    }
    console.log(sum)
}
sum();


function printTribeRec(n){
    if(n===0 ||n===1||n===2)
    return 0;
    if(n===3)
    return 1;
    else
    return printTribe(n-1)+printTribe(n-2)+printTribe(n-3);
}
function printTribe(n)
{
    var ans=0;
    for(var i=1;i<n;i++)
    {
        ans=ans+printTribeRec(i)+"";
    }
    console.log(ans);
}

printTribe(6)

function fib(n)
{
    if(n<=1)
    return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(6));