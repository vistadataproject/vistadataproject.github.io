---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS WCEDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS WCEDIT{:/}
 tag | {::nomarkdown}OWCPCLR{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call clears the Supervisor signature and related fields if the WorkersCompensation specialist has edited fields INJURED PERFORMING DUTY (#146),NOT INJURED PERFORMING JOB (#147), INJURY CAUSED BY EMPLOYEE (#148),CAUSED BY EMPLOYEE EXPLAIN (#149), SUPERVISOR NOT AGREE EXPLAN (#164), or REASON AGENCY CONTROVERTS COP (#165) after the Supervisor signed.  It also sets the field WORKER'S COMP EDIT (#199) so the required bulletin will be sent.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN for the ASISTS record that is being modified.{:/} | 
| {::nomarkdown}CALLER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the menu that originated the call.{:/} | 
| {::nomarkdown}FORM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the form type which can be 2162, CA1, or CA2.  However, the only formever expected with this call is a CA1.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}