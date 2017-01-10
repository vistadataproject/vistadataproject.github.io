---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN MAILMAN NOTIFICATION 

 property | value 
--- | --- 
 label | SPN MAILMAN NOTIFICATION
 tag | MAIL
 routine | [SPNJRPML](http://code.osehra.org/dox/Routine_SPNJRPML_source.html)
 return value type | SINGLE VALUE
 description | Sends admit/discharge/transfer mailman notifications to individual or group Mailman email addresses

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  |  | DUZ of the user initiating the notification  | 
| vs:Input_Parameter-8994_02 | SUBJECT | LITERAL |  |  | Subject of mailman notification | 
| vs:Input_Parameter-8994_02 | PAR | LITERAL |  |  | Four options, set to 1 if chosen (1^1^1^1):                            PIECE 1 - Priority                            PIECE 2 - Information only                            PIECE 3 - Confirmation required                            PIECE 4 - Copy in 'IN' basket | 
| vs:Input_Parameter-8994_02 | TEXT | LIST |  |  | An array format TEXT(1...n) containing the email message in 1 or more lines (limit to 80 chars per line) | 
| vs:Input_Parameter-8994_02 | MLTO | LIST |  |  | An array format MLTO(1...n) containing the recipients of the email in,     and the recipient can be in the form of mail group names and/or     employee names. | 