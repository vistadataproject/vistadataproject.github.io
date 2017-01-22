---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST STATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST STATES{:/}
 tag | {::nomarkdown}STATELST{:/}
 routine | [RORRP029](http://code.osehra.org/dox/Routine_RORRP029_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST STATES remote procedure returns a list of states that conformthe search criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The PART parameter defines the search pattern. If it contains 2 characterabbreviation of the state and the FLAGS parameter contains \A\ then thecorresponding state is returned (see the FLAGS parameter for moredetails). Otherwise, the regular search among state names is performed.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   A  Enable abbreviation search. If PART contains 2     character abbreviation, the corresponding state     is returned. If the length of PART parameter is     not equal 2 or it does not contain a valid state     abbreviation then the regular search is performed.   B  Backwards. Traverses the index in the opposite     direction of normal traversal.{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries that conform the criteria.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}