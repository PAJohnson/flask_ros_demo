;; Auto-generated. Do not edit!


(when (boundp 'flask_demo::hello)
  (if (not (find-package "FLASK_DEMO"))
    (make-package "FLASK_DEMO"))
  (shadow 'hello (find-package "FLASK_DEMO")))
(unless (find-package "FLASK_DEMO::HELLO")
  (make-package "FLASK_DEMO::HELLO"))

(in-package "ROS")
;;//! \htmlinclude hello.msg.html


(defclass flask_demo::hello
  :super ros::object
  :slots (_hello ))

(defmethod flask_demo::hello
  (:init
   (&key
    ((:hello __hello) "")
    )
   (send-super :init)
   (setq _hello (string __hello))
   self)
  (:hello
   (&optional __hello)
   (if __hello (setq _hello __hello)) _hello)
  (:serialization-length
   ()
   (+
    ;; string _hello
    4 (length _hello)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _hello
       (write-long (length _hello) s) (princ _hello s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _hello
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _hello (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;;
   self)
  )

(setf (get flask_demo::hello :md5sum-) "aa1e4c96cf56304cea7e883d117e24f3")
(setf (get flask_demo::hello :datatype-) "flask_demo/hello")
(setf (get flask_demo::hello :definition-)
      "string hello

")



(provide :flask_demo/hello "aa1e4c96cf56304cea7e883d117e24f3")


