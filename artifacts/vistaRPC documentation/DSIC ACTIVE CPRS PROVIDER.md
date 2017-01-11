---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC ACTIVE CPRS PROVIDER 

 property | value 
--- | --- 
 label | DSIC ACTIVE CPRS PROVIDER
 tag | PROV
 routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
 return value type | SINGLE VALUE
 description | This will determine if a user is an active CPRS provider.  The logic steps for this determination flows as follows:   Provider  Condition  --------  -------------------------------------------------- 1    NO    User DUZ value passed is not valid 2   YES    User has an ACCESS CODE: A provider 3    NO    User is terminated and does not own the XUORES key 4   YES    User owns the XUORES key 5   YES    User is a visitor and the RDV flag was passed 6    NO    User is not a provider

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XDUZ | LITERAL | 1 | true | This is a pointer to the NEW PERSON file. | 
| RDV | LITERAL | 1 | true | This is a Boolean flag (1 or 0) indicating whether or not remote data view (or visitors) should be allowed as a provider. | 




 ###### Generated on January 11th 2017, 6:39:43 am