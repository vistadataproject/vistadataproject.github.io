---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Usr_Class_Membership-8930_3
# Usr Class Membership (8930.3)
This file links a person from the New Person file to a class in the User Class file.  Since user class membership includes members of all subclasses, users should be made members of the most discrete class in a hierarchy of classes.  For example, if Jones is a dentist, Jones should be entered into the Dentist class.  Since Dentist is a subclass of the Provider class, Jones is then automatically a Provider.   Persons wearing several different hats can have more than one entry in the file.  For example, Smith might be a dietician also working toward a nursing degree.  Smith could be entered twice, once as a Dietician and once as a Student Nurse.

<dl>
<dt>Global</dt><dd>^USR(8930.3,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | .01 | This is the name of the person to whom membership in a given User Class is <br/>being ascribed. | POINTER | INDEXED<br/>REQUIRED | [New_Person-200](New_Person-200)
**User Class**{::nomarkdown}<pre><code>  user_class</code></pre>{:/} | .02 | This is the User Class to which the User in question is being grated <br/>membership. | POINTER |  | [Usr_Class-8930](Usr_Class-8930)
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .03 | This is the date on which the user became, or will become a member of the <br/>User Class in question.  This can be used to determine current, past, or <br/>future membership status within a given User Class, as well as for <br/>scheduling transitions between Classes (e.g., members of the class "PGY1 <br/>Residents" will finish their rotation on June 1st, and you'd like to <br/>schedule their trasition into the class PGY2 Residents as of that date).<br/> | DATE-TIME |  | 
**Expiration Date**{::nomarkdown}<pre><code>  expiration_date</code></pre>{:/} | .04 | This is the optional date on which the User's membership in a given class <br/>will expire (i.e., be automatically discontinued).  This can be used to <br/>determine historical or future membership within a particular class, and<br/>to schedule transitions between classes (e.g., the current members of the <br/>PGY1 Residents Class will become PGY2 Residents on June 1st, at which time <br/>their membership in the class PGY1 Residents will expire, and their <br/>membership in the class PGY2 Residents will become effective). | DATE-TIME |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}