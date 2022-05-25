# Don't forget to run your tests!

def is_character_match(string1, string2):
	string1 = string1.upper()
	string2 = string2.upper()
	arr1 = list(''.join(string1.split(' ')))
	arr1.sort()
	arr2 = list(''.join(string2.split(' ')))
	arr2.sort()
	if len(arr1) != len(arr2):
		return(False)
	for i in range(0, len(arr1)):
		if arr1[i] != arr2[i]:
			return(False)
	return(True)

#print(is_character_match('zach', 'attack'))	