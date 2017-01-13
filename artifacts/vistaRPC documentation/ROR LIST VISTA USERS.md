---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST VISTA USERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST VISTA USERS{:/}
 tag | {::nomarkdown}USERLIST{:/}
 routine | [RORRP024](http://code.osehra.org/dox/Routine_RORRP024_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST VISTA USERS remote procedure returns a list of users from theNEW PERSON file (#200).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The PART parameter defines the search pattern. It should contain thebeginning of the user's name.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   D  Get default division for each user   P  Select providers only (check for the PROVIDER     security key).{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries that conform the criteria.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.{:/} | 




 Generated on January 13th 2017, 5:52:13 am