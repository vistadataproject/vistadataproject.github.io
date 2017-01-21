---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC POSITION MEMBERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC POSITION MEMBERS{:/}
 tag | {::nomarkdown}PSLST{:/}
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array of positions.  For each position, the standard role,team member currently filling, and the preceptor (if any) for the team member.   Returns both Internal and external values.Piece 1:  Team IenTAB  2:  Position IenTAB  3:  Team member Ien (File #200)TAB  4:  Team member's name      5:  Precpetor's Ien (File #200)TAB  6:  Preceptor's NameTAB  7:  Primary Care role (if any) for position.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LIST ATTRIBUTES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}   DFN  : Patient's dfn   BEGIN:   Beginning date range   END  :   Ending date range{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}