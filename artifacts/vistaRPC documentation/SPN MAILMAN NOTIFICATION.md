---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN MAILMAN NOTIFICATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN MAILMAN NOTIFICATION{:/}
 tag | {::nomarkdown}MAIL{:/}
 routine | [SPNJRPML](http://code.osehra.org/dox/Routine_SPNJRPML_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sends admit/discharge/transfer mailman notifications to individual or group Mailman email addresses{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DUZ of the user initiating the notification {:/} | 
| {::nomarkdown}SUBJECT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Subject of mailman notification{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Four options, set to 1 if chosen (1^1^1^1):                            PIECE 1 - Priority                            PIECE 2 - Information only                            PIECE 3 - Confirmation required                            PIECE 4 - Copy in 'IN' basket{:/} | 
| {::nomarkdown}TEXT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}An array format TEXT(1...n) containing the email message in 1 or more lines (limit to 80 chars per line){:/} | 
| {::nomarkdown}MLTO{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}An array format MLTO(1...n) containing the recipients of the email in,     and the recipient can be in the form of mail group names and/or     employee names.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}