---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ANRV TANRVMESSAGE
# ANRV TANRVMESSAGE

Create's and sends completed VIST Outcomes to the national mailgroup to populate the national database.

Property | Value
--- | ---
Label | SNDTXT
Routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ANRVCMD | LITERAL | 30 | true | 1&gt; CREATE       Initializes message.2&gt; APPEND       Add message text.3&gt; SUBJECT      Give the message a subject.4&gt; SENDTO       e-mail address to send message to.5&gt; EXECUTE      Send the message using VistA Mail.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}