# API reference documentation

These proto files are used to generate the Clarifai API reference documentation and the
(de)serialization code of (some of) the API clients. Since not all of the API is public, some
annotation are needed to let the generation code know what messages/endpoints/files to skip.




1. PRIVATE MESSAGE

   To make a message private, add the following option to the message:
```
    message SomePrivateMessage {
        option clarifai.auth.util.cl_private_message = true
        ...
    }
```

2. PRIVATE RPC

   To make a rpc private, add the following option to the rpc:
```
      rpc SomePrivateEndpoint(SomeRequest) returns (SomeResponse) {
          ...
          option (clarifai.auth.util.cl_private_rpc) = true;
      }
```

3. PRIVATE FIELD

   To make a field of a message not show up in the API reference documentation, add a clarifai.auth.util.cl_private_field
   option to the field.
```
      message SomeMessage {
          string some_private_field = 1 [(clarifai.auth.util.cl_private_field) = true];
      }
```

Note: Comment scope

   Comment lines immediately above a non-private field/rpc/message will be set as the description
   of the object in the API reference documentation. Any such comment line starting with TODO
   or FIXME will be skipped.
```
       // This won't be a part of the message description.

       // This is the message description.
       // TODO: This will not be visible in the API documentation.
       // This is the second line of the message description.
       message SomeMessage {
           ...
       }
```
