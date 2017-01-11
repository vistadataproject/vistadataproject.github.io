---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST VISTA USERS 

 property | value 
--- | --- 
 label | ROR LIST VISTA USERS
 tag | USERLIST
 routine | [RORRP024](http://code.osehra.org/dox/Routine_RORRP024_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST VISTA USERS remote procedure returns a list of users from theNEW PERSON file (#200).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 | true | The PART parameter defines the search pattern. It should contain thebeginning of the user's name. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   D  Get default division for each user   P  Select providers only (check for the PROVIDER     security key). | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries that conform the criteria. | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters. | 




Generated on January 11th 2017, 6:34:23 am