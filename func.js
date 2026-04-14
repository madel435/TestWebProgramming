function getMessage()
{
	let randomN = Math.floor(Math.random() * 4) + 1;

	if (randomN == 1)
	{
  		return "Almost ready... making more internet connections than I have followers.";
	}

	else if (randomN == 2)
	{
  		return "Waiting for the gremlins to finish ";
	}

	else if (randomN == 3 )
	{
  		return "Time is passing and your still waiting ";
	}

	else if (randomN == 4 )
  		return "We waiting, waiting, waiting, waiting...";
	}


module.exports = {
getMessage : getMessage
};
