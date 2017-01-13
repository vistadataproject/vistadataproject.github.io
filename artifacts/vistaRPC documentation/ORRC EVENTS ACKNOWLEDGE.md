---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC EVENTS ACKNOWLEDGE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC EVENTS ACKNOWLEDGE{:/}
 tag | {::nomarkdown}CLEAR{:/}
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will clear the event alerts for this user, and return a trueor false value for each ID if successful.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}ALERTS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of alert IDs to be cleared, in the form \VST:\_ID whereID is the alert identifier as defined by Kernel (\OR,<patient>,<Notification ien>;<creator>;<date created>\).{:/} | 




 Generated on January 13th 2017, 6:44:47 am