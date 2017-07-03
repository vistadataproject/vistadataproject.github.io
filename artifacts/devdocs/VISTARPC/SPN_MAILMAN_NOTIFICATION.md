---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN MAILMAN NOTIFICATION
# SPN MAILMAN NOTIFICATION

Sends admit/discharge/transfer mailman notifications to individual or group Mailman email addresses

Property | Value
--- | ---
Label | MAIL
Routine | [SPNJRPML](http://code.osehra.org/dox/Routine_SPNJRPML_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  |  | DUZ of the user initiating the notification 
SUBJECT | LITERAL |  |  | Subject of mailman notification
PAR | LITERAL |  |  | Four options, set to 1 if chosen (1^1^1^1):                            PIECE 1 - Priority                            PIECE 2 - Information only                            PIECE 3 - Confirmation required                            PIECE 4 - Copy in &#x27;IN&#x27; basket
TEXT | LIST |  |  | An array format TEXT(1...n) containing the email message in 1 or more lines (limit to 80 chars per line)
MLTO | LIST |  |  | An array format MLTO(1...n) containing the recipients of the email in,     and the recipient can be in the form of mail group names and/or     employee names.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}