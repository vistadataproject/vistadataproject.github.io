---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC ACTIVE CPRS PROVIDER
# DSIC ACTIVE CPRS PROVIDER

This will determine if a user is an active CPRS provider.  The logic steps for this determination flows as follows:   Provider  Condition  --------  -------------------------------------------------- 1    NO    User DUZ value passed is not valid 2   YES    User has an ACCESS CODE: A provider 3    NO    User is terminated and does not own the XUORES key 4   YES    User owns the XUORES key 5   YES    User is a visitor and the RDV flag was passed 6    NO    User is not a provider

Property | Value
--- | ---
Label | PROV
Routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XDUZ | LITERAL | 1 | true | This is a pointer to the NEW PERSON file.
RDV | LITERAL | 1 | true | This is a Boolean flag (1 or 0) indicating whether or not remote data view (or visitors) should be allowed as a provider.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}