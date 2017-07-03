---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Usr_Class-8930
# Usr Class (8930)
This file is intended to allow the definition of user classes in such a way that they are useful across packages.  It will undoubtedly evolve with more experience in this area.   These user classes are then used to support part of the the "authorization" concept - who may do what to a document, order, etc.   They are also used to support part of the "subscription" concept - who should receive something, e.g. a notification that a document needs signature.   The User Authorization/Subscription file points to the User Class file to allocate authorizations/subscriptions to appropriate user classes.   The User Class Membership file links users in the New Person file to User Classes.   This file supports an infinite hierarchy of subclasses, with each entry having as many subclasses as desired.  Subclasses are contained in the same file, as entries in their own right.  A class automatically contains as members all members of its subclasses, as well as explicit members of the class itself.

<dl>
<dt>Global</dt><dd>^USR(8930,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the user class (e.g., Transcriptionist, Medical Record<br/>Technician, MIS Manager, Medical Student, Nurse, Resident, etc.). | STRING | INDEXED<br/>REQUIRED | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | .02 |  | STRING | INDEXED | 
**Active**{::nomarkdown}<pre><code>  active</code></pre>{:/} | .03 |  | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}Active: <em><strong>1</strong></em><br/>Inactive: <em><strong>0</strong></em>{:/}
**Display Name**{::nomarkdown}<pre><code>  display_name</code></pre>{:/} | .04 |  | STRING | INDEXED | 
**Person Class**{::nomarkdown}<pre><code>  person_class</code></pre>{:/} | .05 | This provides a mapping between the User Class file of ASU and the Person <br/>Class file, which encodes the HCFA draft standard Taxonomy of Health Care <br/>Providers. | POINTER |  | [Person_Class-8932_1](Person_Class-8932_1)
**Subclass**{::nomarkdown}<pre><code>  subclass</code></pre>{:/} | 1 | If for example Service Chief is entered as a subclass of Staff Physician,<br/>then persons listed as service chiefs inherit all privileges assigned to<br/>staff physicians.<br/>A subclass of a class is a subset of the class.  For example, since<br/>the class Staff Physician.<br/> <br/>Subclasses will be used for inheriting user authorizations/subscriptions.<br/>For example, if an entry in the User Authorization/Subscription file states<br/>that the user class Staff Physician may sign progress notes, and if the<br/>entry states that this entry includes user subclasses, and if Service<br/>chief is a subclass of class Staff Physician in the User Class file,<br/>then service chiefs may also sign progress notes.<br/> <br/>If a User Authorization/Subscription file entry includes user subclasses,<br/>it also includes subclasses of subclasses, etc. | POINTER |  | [Usr_Class-8930](Usr_Class-8930)
**Ok To Distribute**{::nomarkdown}<pre><code>  ok_to_distribute</code></pre>{:/} | 2 | Answer "YES" if this individual User Class is to be distributed<br/>nationally.  Answer "NO" if not. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}