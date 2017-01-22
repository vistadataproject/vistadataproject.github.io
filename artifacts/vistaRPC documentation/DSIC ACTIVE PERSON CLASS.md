---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC ACTIVE PERSON CLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ACTIVE PERSON CLASS{:/}
 tag | {::nomarkdown}PER{:/}
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return a user's active person class for a given date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the user's DUZ value whose active person class is desired.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Fileman date.time for the date to check for an active person class membership.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}