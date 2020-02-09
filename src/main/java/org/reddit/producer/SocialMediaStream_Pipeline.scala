package org.reddit.producer

import com.typesafe.config.ConfigFactory

object SocialMediaStream_Pipeline extends App {
  val conf = ConfigFactory.load()
  val redditProducer = new Thread(new RedditProducer(conf))
  redditProducer.start()
}